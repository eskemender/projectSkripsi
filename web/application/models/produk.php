<?php

DEFINED('BASE_URL') or exit(header('location:403'));

class Produk_model extends ML_Model
{
    public function stok_produk($produk)
    {
        return $this->all('produk')
            ->where("tipe_produk", $produk)
            ->get(1);
    }

    public function cek_pesanan($id)
    {
        return $this->all('transaksi')
            ->where("id_pembeli", $id)
            ->and("terima", '0')
            ->get('c');
    }

    public function satu_user($id)
    {
        return $this->all('user')
            ->where("id_user", $id)
            ->get(1);
    }

    public function status_toko()
    {
        return $this->all('status_depot')->get(1);
    }

    public function satu_produk($id)
    {
        return $this->all('produk')
            ->where("id_produk", $id)
            ->get(1);
    }

    public function satu_transaksi($id)
    {
        return $this->all('transaksi')
            ->where("id_transaksi", $id)
            ->get(1);
    }

    public function satu_produk_trans($id)
    {
        return $this->all('produk')
            ->where("id_produk")
            ->in_select('id_produk')
            ->from('transaksi')
            ->where('id_transaksi', $id)->close()
            ->get(1);
    }

    public function pembeli($id)
    {
        return $this->all('user')
            ->where("id_user", $id)
            ->get(1);
    }

    public function produk($id)
    {
        return $this->all('produk')
            ->where("id_produk", $id)
            ->get(1);
    }

    public function semua_pesanan($id, $tipe)
    {
        if ($tipe === 'Pembeli') {
            return $this->all('transaksi')
                ->where("id_pembeli", $id)
                ->and("terima", '0')
                ->get();
        } else {
            return $this->all('transaksi')
                ->where("terima", '1')
                ->get();
        }
    }

    public function home_semua_pesanan()
    {
        return $this->all('transaksi')
            ->where("terima", '0')
            ->get();
    }

    public function hitung_pesanan($id)
    {
        return $this->all('transaksi')
            ->where("id_pembeli", $id)
            ->and("terima", '0')
            ->get('c');
    }

    public function pesanan_terakhir($id, $type = 1)
    {
        return $this->all('transaksi')
            ->where("id_pembeli", $id)
            ->order_by("id_transaksi desc")
            ->get($type);
    }
}
