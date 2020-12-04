$(function(){
    ML.do('submit', '#tambahPembeli', tambah_data, 'ajax/tambah-pembeli', '', '#tambahPembeli');
    ML.do('submit', '#ubahPembeli', tambah_data, 'ajax/ubah-pembeli', '', '#ubahPembeli');
});