<?php

DEFINED('BASE_URL') or exit(header('location:403'));

class Admin extends ML_Controller
{
    public function __construct()
    {
        parent::__construct();

        # load library
        $this->library('session, form');

        # load my library
        $this->my_library('left_menu');

        # check if login
        $this->session->access_check('un_auth', 'login');

        # verify user level access
        $this->session->user_level('Penjual', $this->session->ul_auth, '404');

        # load model
        $this->model('admin');
    }

    public function index()
    {
        $data['semua_pembeli'] = $this->admin_model->semua_pembeli();
        $this->view('pembeli', $data);
    }

    public function tambah_pembeli()
    {
        $this->view('tambah_pembeli');
    }

    public function ubah_pembeli()
    {
        $data['pembeli'] = $this->admin_model->satu_pembeli(uri3);
        $this->view('ubah_pembeli', $data);
    }

    public function delete_pembeli()
    {
        $this->model->where('id_user', uri3)
            ->delete('user');

        $this->model->close_conn();
        header("location: " . BASE_URL);
    }
}
