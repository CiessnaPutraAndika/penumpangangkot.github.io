var penumpang = [] //array
var tambahPenumpang = function (namaPenumpang, penumpang){ // namaPenumpang,penumpang parameter function
    if(penumpang.length == 0){ //untuk menghitung isi panjangnya data
        penumpang.push(namaPenumpang); //untuk menambah data ke dalam array
        return penumpang; //untuk mengulang isi array & keluar dari function
    }else{
        for(i = 0; i < penumpang.length; i++){ //untuk mencari perulang/mencari kursi dari awal. Jika i=0 dan i lebih kecil dari penumpang.length maka hasilnya akan true(perulangannya berjalan).
            if(penumpang[i] == undefined){ //jika penumpang = kosong/tidak didalam angkot. Lalu dibuatnya kondisi undefined agar ada isi penumpangnya.
                penumpang[i] = namaPenumpang; //ini berfungi untuk menambahkan kondisi yang kosong/undefined. Jadi jika penumpang[i] = 0 jadi kita tambahkan nama penumpang agar tidak kosong/undefined.
                return penumpang; //mengembalikan isi array & keluar dari function
            }else if(namaPenumpang == penumpang[i]){ // untuk mencari data sama yang telah diinput datanya
                console.log(namaPenumpang + ' sudah didalam angkot'); //memberikan infromasi data yang sama/sudah ada didalam angkot.
                return penumpang; //mengembalikan isi array & keluar dari function
            }else if(i == penumpang.length - 1){ //karena i nilainya 0, dan penumpang.length mempunyai nilai 1. fungsi - 1 setelah penumpang.length adalah untuk menyamakan nilai i dan penumpang.length.
                penumpang.push(namaPenumpang); //menambah nama penumpang
                return penumpang; //mengembalikan isi array & keluar dari function
            }
        }
    }
}   
