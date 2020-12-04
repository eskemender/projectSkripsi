<?php

DEFINED('ML_API') or exit(header('location: 303'));

class Pesan extends ML_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->library('session, form');
        $this->model('produk');
    }

    public function index()
    {
        $row    = $this->produk_model->status_toko();
        if ($row['status'] === '1') {
            $this->form->input('alamat');

            if ($this->form->validate() && $this->input->post('jumlah') !== '0') {
                $id_user    = $this->input->post('id_user');
                $id_produk  = $this->input->post('id_produk');
                $alamat     = $this->input->post('alamat');
                $jumlah     = $this->input->post('jumlah');
                $harga      = $this->input->post('harga');

                // $cek_pesanan    = $this->produk_model->cek_pesanan($id_user);
                // if ($cek_pesanan > 0) {
                //     exit(json_encode('Anda sudah memesan!'));
                // } else {
                $this->model->data('id_produk', $id_produk)
                    ->data('total_pesanan', $jumlah)
                    ->data('total_harga', $harga)
                    ->data('id_pembeli', $id_user)
                    ->data('alamat', $alamat)
                    ->insert('transaksi');

                $row    = $this->produk_model->satu_produk($id_produk);
                $stok   = $row['stok_produk'] - $jumlah;

                $this->model->set('stok_produk', $stok)
                    ->where('id_produk', $id_produk)
                    ->update('produk');

                exit(json_encode('1'));
                // }
            } else {
                exit(json_encode('Belum masukan alamat ' . "\n" . 'atau' . "\n" . 'belum tambahkan jumlah produk!'));
            }
        } else {
            exit(json_encode('Depot belum menerima pesanan.'));
        }
    }

    public function semua()
    {
        $data_json['records']   = array();
        $id_user    = $this->input->post('id_user', true);
        $tipe       = $this->input->post('tipe_user', true);
        $result = $this->produk_model->semua_pesanan($id_user, $tipe);
        foreach ($result as $row) {
            $tp = $this->produk_model->produk($row['id_produk']);
            $data['produk'] = $tp['tipe_produk'];

            $p = $this->produk_model->pembeli($row['id_pembeli']);
            $data['pembeli'] = $p['nama_user'];

            array_push($data_json['records'], array_merge($row, $data));
        }
        exit(json_encode($data_json));
    }

    public function home()
    {
        $data_json['records']   = array();
        $result = $this->produk_model->home_semua_pesanan();
        foreach ($result as $row) {
            $tp = $this->produk_model->produk($row['id_produk']);
            $data['produk'] = $tp['tipe_produk'];

            $p = $this->produk_model->pembeli($row['id_pembeli']);
            $data['pembeli'] = $p['nama_user'];

            $p  = $this->produk_model->satu_user($row['id_pembeli']);
            $data['pembeli']    = $p['nama_user'];


            array_push($data_json['records'], array_merge($row, $data));
        }

        exit(json_encode($data_json));
    }

    public function status()
    {
        $row    = $this->produk_model->status_toko();
        exit(json_encode($row['status']));
    }

    public function set_status()
    {
        $status = $this->input->post('status', true);
        $this->model->set('status', $status)
            ->update('status_depot');

        exit(json_encode('1'));
    }

    public function batal()
    {
        $id_transaksi    = $this->input->post('id_transaksi', true);

        $row    = $this->produk_model->satu_transaksi($id_transaksi);
        $jumlah = $row['total_pesanan'];

        $row    = $this->produk_model->satu_produk_trans($id_transaksi);
        $stok   = $row['stok_produk'] + $jumlah;
        $id     = $row['id_produk'];

        $this->model->set('stok_produk', $stok)
            ->where('id_produk', $id)
            ->update('produk');

        $this->model->where('id_transaksi', $id_transaksi)
            ->delete('transaksi');

        exit(json_encode('1'));
    }

    public function terima()
    {
        $id_transaksi    = $this->input->post('id_transaksi', true);
        $this->model->set('terima', '1')
            ->where('id_transaksi', $id_transaksi)
            ->update('transaksi');

        exit(json_encode('1'));
    }

    public function pesanan_pembeli()
    {
        $id_user    = $this->input->post('id_user', true);
        $pesanan    = $this->produk_model->hitung_pesanan($id_user);

        exit(json_encode($pesanan));
    }

    public function pesanan_terakhir()
    {
        $id_user    = $this->input->post('id_user', true);
        $rows   = $this->produk_model->pesanan_terakhir($id_user, 'c');
        if ($rows > 0) {
            $row        = $this->produk_model->pesanan_terakhir($id_user);
            $pesanan['id_produk']       = $row['id_produk'];
            $pesanan['total_pesanan']   = $row['total_pesanan'];
            $pesanan['total_harga']     = $row['total_harga'];
            $pesanan['alamat']          = $row['alamat'];

            $tp = $this->produk_model->satu_produk($row['id_produk']);
            $pesanan['tipe_produk'] = $tp['tipe_produk'];

            exit(json_encode($pesanan));
        } else {
            exit(json_encode('0'));
        }
    }
}
