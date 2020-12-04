<?php

    DEFINED('ML_API') OR exit(header('location: 303'));

    class Login extends ML_Controller
    {
        public function __construct()
        {
            parent::__construct();
            $this->library('session, form');
            $this->model('admin');
        }

        public function index()
        {            
            $this->form->input('LiUnEmail:Email or Username is required!,
                                LiPassword:Password is required!');
            
            if($this->form->validate())
            {
                $email      = $this->input->post('LiUnEmail');
                $password   = sha1($this->input->post('LiPassword'));

                $user_exist = $this->admin_model->cek_login($email, $password);
                if($user_exist > 0)
                {
                    $row        = $this->admin_model->cek_login($email, $password, 1);
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
                    $this->user_error('Oops..., Login gagal!'."\n".'Silahkan coba kembali.');
                }
            }
            else
            {
                $this->user_error('Oops..., Ada kesalahan!'."\n".'Masih ada input yang kosong');
            }
        }
    }
?>  