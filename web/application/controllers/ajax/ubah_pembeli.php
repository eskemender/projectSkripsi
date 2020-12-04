<?php

    DEFINED('AJAX') OR exit(header('location:403'));

    class Ubah_pembeli extends ML_Controller
    {
        public function __construct()
        {
            parent::__construct();

            # load session library
            $this->library('session, form');

            # check if login
            $this->session->access_check('un_auth', 'login', true);

            # load model
            $this->model('admin');
        }

        public function index()
        {
            $this->form->input('nama_pembeli:Nama pembeli harus diisi.,
                                username:Username harus diisi.,
                                email:Email harus diisi.,
                                alamat:Alamat harus diisi.,
                                telfon:Nomor telfon harus diisi.');
            
            if($this->form->validate())
            {
                $id             = $this->input->post('id');
                $nama_pembeli   = uc_all($this->input->post('nama_pembeli'));
                $username       = $this->input->post('username');
                $email          = $this->input->post('email');
                $alamat         = uc_all($this->input->post('alamat'));
                $telfon         = uc_all($this->input->post('telfon'));
                $password       = sha1($username);

                # insert
                $this->model->set('nama_user', $nama_pembeli)
                            ->set('username', $username)
                            ->set('email', $email)
                            ->set('lokasi', $alamat)
                            ->set('tipe_user', 'Pembeli')
                            ->set('no_telfon', $telfon)
                            ->set('password', $password)
                            ->where('id_user', $id)
                            ->update('user');
                
                $this->model->close_conn();
                exit('1|Berhasil ubah pembeli.');
            }
            else
            {
                exit('0|'.$this->form->empty());
            }
        }
    }
