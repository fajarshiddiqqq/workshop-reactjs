// rfce --> snippet for new components
// {} adalah props --> untuk menangkap elemen (supaya dinamis)
// kalau "{seperti ini}", akan dianggap sebagai string (tidak berhasil)
// maka harus `${seperti ini}`
// props bisa dipakai satu saja dan dipakai untuk semua props field

function Button({ color, title }) {
  return (
    <button className={`btn btn-${ color } me-2`}>{ title }</button>
  );
}

export default Button;