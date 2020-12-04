<?php

    DEFINED('ML_API') OR exit(header('location: 303'));

    class Produk extends ML_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->library('session, form');
            $this->model('produk, admin');
        }

        public function index()
        {
            $row    = $this->produk_model->stok_produk('Galon');
            $data['id_galon']    = $row['id_produk'];
            $data['stok_galon']  = $row['stok_produk'];
            $data['harga_galon'] = $row['harga'];

            $row    = $this->produk_model->stok_produk('Gas');
            $data['id_gas']      = $row['id_produk'];
            $data['stok_gas']    = $row['stok_produk'];
            $data['harga_gas']   = $row['harga'];

            echo json_encode($data);
        }

        public function update_stok()
        {
            $id_galon   = $this->input->post('id_galon');
            $stok_galon = $this->input->post('stok_galon');
            $row        = $this->produk_model->satu_produk($id_galon);
            $stokGalon  = $row['stok_produk'] + $stok_galon;

            $this->model->set('stok_produk', $stokGalon)
                        ->where('id_produk', $id_galon)
                        ->update('produk');

            $id_gas     = $this->input->post('id_gas');
            $stok_gas   = $this->input->post('stok_gas');
            $row        = $this->produk_model->satu_produk($id_gas);
            $stokGas    = $row['stok_produk'] + $stok_gas;

            $this->model->set('stok_produk', $stokGas)
                        ->where('id_produk', $id_gas)
                        ->update('produk');
            
            exit(json_encode('1'));
        }

        public function update_profile()
        {
            $this->form->input('nama, alamat, telfon, email');

            if($this->form->validate())
            {
                $id_user   = $this->input->post('id_user');
                $nama   = $this->input->post('nama');
                $alamat = $this->input->post('alamat');
                $telfon = $this->input->post('telfon');
                $email  = $this->input->post('email');

                $this->model->set('nama_user', $nama)
                            ->set('no_telfon', $telfon)
                            ->set('email', $email)
                            ->set('lokasi', $alamat)
                            ->where('id_user', $id_user)
                            ->update('user');
                
                $row        = $this->produk_model->satu_user($id_user);
                $username   = $row['username'];
                $email      = $row['email'];
                $id_user    = $row['id_user'];
                $fullname   = $row['nama_user'];
                $no_telfon  = $row['no_telfon'];
                $lokasi     = $row['lokasi'];
                $tipe_user  = $row['tipe_user'];
                $connError  = IMAGES_PATH . 'error/connectionError.png';

                $returnData = "$username::$email::$id_user::$fullname::$no_telfon::$lokasi::$tipe_user::$connError";
                $this->model->close_conn();
                exit(json_encode("1|$returnData"));
            }
            else
            {
                exit(json_encode('Masih ada yang kosong'));
            }
        }
    }
    
?>  