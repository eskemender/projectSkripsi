<?php

DEFINED('BASE_URL') or exit(header('location: 403'));

class Admin_model extends ML_Model
{
    public function cek_login($username, $pass, $type = 'c')
    {
        return $this->all('user')
            ->where('username', $username)
            ->and('password', $pass)
            ->get($type);
    }

    public function cek_username($username, $type = 'c')
    {
        return $this->all('user')
            ->where('username', $username)
            ->get($type);
    }

    public function semua_pembeli($type = '')
    {
        return $this->all('user')
            ->where('tipe_user', 'Pembeli')
            ->get($type);
    }

    public function satu_pembeli($id)
    {
        return $this->all('user')
            ->where('id_user', $id)
            ->get(1);
    }

    public function currentTime($type = 1)
    {
        return $this->select("CURRENT_TIMESTAMP() AS date_time")->get($type);
    }
}
