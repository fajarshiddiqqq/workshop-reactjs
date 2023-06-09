function Card({ photo, masa,  nama, nim, alamat, nomor }) {
  return (
    <>
      <div className="card bg-light mb-3 shadow" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-4 text-center border-end pe-0" style={{ maxWidth: "300px" }}>
            <img src={photo} className="card-img-top" alt="..."  />
            <p className="fw-light">Masa berlaku hingga : {masa}</p>
          </div>
          <div className="col-8 p-5">
            <div className="card-body">
              <h3 className="card-title mb-3 text-uppercase fw-bold">Author Information</h3>
              <div className="card-text">
                <table>
                  <tr>
                    <td><p className="m-0 p-0">Name</p></td>
                    <td><p className="m-0 p-0">&nbsp;:&nbsp;</p></td>
                    <td><p className="m-0 p-0">{nama}</p></td>
                  </tr>
                  <tr>
                    <td><p className="m-0 p-0">Nim</p></td>
                    <td><p className="m-0 p-0">&nbsp;:&nbsp;</p></td>
                    <td><p className="m-0 p-0">{nim}</p></td>
                  </tr>
                  <tr >
                    <td><p className="m-0 p-0">Address</p></td>
                    <td><p className="m-0 p-0">&nbsp;:&nbsp;</p></td>
                    <td><p className="m-0 p-0">{alamat}</p></td>
                  </tr>
                  <tr>
                    <td><p >Phone</p></td>
                    <td><p >&nbsp;:&nbsp;</p></td>
                    <td><p >{nomor}</p></td>
                  </tr>
                </table>
              </div>
              <a href="#" className="btn btn-secondary">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
