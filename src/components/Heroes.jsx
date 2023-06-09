function Heroes() {
  return (
    <>
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">Hero Example</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minima id laboriosam sint molestiae similique aliquid distinctio, ipsum quia neque omnis minus culpa earum voluptatem facilis inventore facere odit quo.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
              Button Example
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Another Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Heroes;
