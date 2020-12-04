<?php

DEFINED('ML_API') or exit(header('location: 303'));

class Signup extends ML_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->library('session, form');
        $this->model('admin');
    }

    public function index()
    {
        $this->form->input('LiUsername, LiNamaLengkap, LiEmail, LiTelfon, LiLokasi, LiPassword');

        if ($this->form->validate()) {
            $username       = $this->input->post('LiUsername');
            $namalengkap    = $this->input->post('LiNamaLengkap');
            $email          = $this->input->post('LiEmail');
            $telfon         = $this->input->post('LiTelfon');
            $lokasi         = $this->input->post('LiLokasi');
            $password       = sha1($this->input->post('LiPassword'));

            $rows   = $this->admin_model->cek_username($username);
            if ($rows > 0) {
                $this->user_error('Oops..., Ada kesalahan!' . "\n" . 'username "' . $username . '" suda ada!');
            } else {
                $this->model->data('nama_user', $namalengkap)
                    ->data('username', $username)
                    ->data('no_telfon', $telfon)
                    ->data('email', $email)
                    ->data('password', $password)
                    ->data('lokasi', $lokasi)
                    ->data('tipe_user', 'Pembeli')
                    ->insert('user');

                exit(json_encode("1"));
            }
        } else {
            $this->user_error('Oops..., Ada kesalahan!' . "\n" . 'Masih ada input yang kosong');
        }
    }
}
