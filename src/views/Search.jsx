/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

export default function Search() {
  return (
    <main className="main-body" data-pg-collapsed>
      <section className="search-cover" data-pg-collapsed>
        <div className="container">
          <div className="search">
            <div className="row" data-pg-collapsed>
              <div data-pg-collapsed className="col-sm-6 col-8">
                <i className="fas fa-search search-icon" />
                <input className="search-input no-focus" />
              </div>
              <div className="col-sm-3 d-none d-sm-inline-block" data-pg-collapsed>
                <select className="custom-select search-select no-focus" name="category" id="category" data-pg-collapsed>
                  <option selected value={0}>All categories</option>
                  <option value={3}>Business</option>
                  <option value={7}>Entertainment</option>
                  <option value={4}>Fashion</option>
                  <option value={6}>Food</option>
                  <option value={5}>Health</option>
                  <option value={8}>History</option>
                  <option value={1}>Technology</option>
                  <option value={2}>Sports</option>
                  <option value={9}>Others</option>
                </select>
              </div>
              <div className="text-right col-sm-3 col-4">
                <button type="button" className="btn btn-brand search-button shadow-none">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper min-vh-100 " data-pg-collapsed>
        <div className="container">
          <header className="page-header page-header-sm">
            <h1>
            Showing 1-7 of 45
              {' '}

            </h1>
            <div className="btn-group btn-group-toggle float-right view-changer" data-toggle="buttons">
              <label className="btn active">
                <input type="radio" name="options" autoComplete="off" defaultChecked />
                <i className="fas fa-th" />
              </label>
              <label className="btn">
                <input type="radio" name="options" autoComplete="off" />
                <i className="fas fa-list" />
              </label>
            </div>
          </header>
          <div className="row view-row">
            <div className="col-sm-6 col-lg-4" data-pg-collapsed>
              <div className="article">
                <a href="single-article.html" className="link-surface" />
                <div className="article-cover">
                  <img src="assets/images/articles/thought-catalog-470985-unsplash.jpg" className="article-cover-img" />
                </div>
                <div className="article-item">
                  <span className="article-category">Health</span>
                  <h4>5 ways to manage your time effectively.</h4>
                  <p>Distinctively coordinate pandemic technologies rather than market-driven meta-services. Distinctively reconceptualize high standards in...</p>
                  <div className="article-author">
                    <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" />
                    <div>
                      <h6>Alexandra</h6>
                      <span>22 hrs ago</span>
                      <span className="article-author-dot" />
                      <span>4 min read</span>
                      <i className="fas fa-bookmark transition" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-pg-collapsed>
              <div className="article transition">
                <a href="single-article.html" className="link-surface" />
                <div className="article-cover">
                  <img src="assets/images/articles/brooke-lark-158017-unsplash.jpg" className="article-cover-img transition" />
                </div>
                <div className="article-item">
                  <span className="article-category">Food</span>
                  <h4>5 ways to manage your time effectively.</h4>
                  <p>Distinctively coordinate pandemic technologies rather than market-driven meta-services. Distinctively reconceptualize high standards in...</p>
                  <div className="article-author">
                    <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" />
                    <div>
                      <h6>Alexandra</h6>
                      <span>22 hrs ago</span>
                      <span className="article-author-dot" />
                      <span>4 min read</span>
                      <i className="fas fa-bookmark transition" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-pg-collapsed>
              <div className="article transition">
                <a href="single-article.html" className="link-surface" />
                <div className="article-cover">
                  <img src="assets/images/articles/avel-chuklanov-509630-unsplash.jpg" className="article-cover-img transition" />
                </div>
                <div className="article-item">
                  <span className="article-category">Entertainment</span>
                  <h4>5 ways to manage your time effectively.</h4>
                  <p>Distinctively coordinate pandemic technologies rather than market-driven meta-services. Distinctively reconceptualize high standards in...</p>
                  <div className="article-author">
                    <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" />
                    <div>
                      <h6>Alexandra</h6>
                      <span>22 hrs ago</span>
                      <span className="article-author-dot" />
                      <span>4 min read</span>
                      <i className="fas fa-bookmark transition bookmarked" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-pg-collapsed>
              <div className="article transition">
                <a href="single-article.html" className="link-surface" />
                <div className="article-cover">
                  <img src="assets/images/articles/hammer-tusk-79752-unsplash.jpg" className="article-cover-img transition" />
                </div>
                <div className="article-item">
                  <span className="article-category">Technology</span>
                  <h4>5 ways to manage your time effectively.</h4>
                  <p>Distinctively coordinate pandemic technologies rather than market-driven meta-services. Distinctively reconceptualize high standards in...</p>
                  <div className="article-author">
                    <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" />
                    <div>
                      <h6>Alexandra</h6>
                      <span>22 hrs ago</span>
                      <span className="article-author-dot" />
                      <span>4 min read</span>
                      <i className="fas fa-bookmark transition bookmarked" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-pg-collapsed>
              <div className="article transition">
                <a href="single-article.html" className="link-surface" />
                <div className="article-cover">
                  <img src="assets/images/articles/rawpixel-558596-unsplash.jpg" className="article-cover-img transition" />
                </div>
                <div className="article-item">
                  <span className="article-category">Business</span>
                  <h4>5 ways to manage your time effectively.</h4>
                  <p>Distinctively coordinate pandemic technologies rather than market-driven meta-services. Distinctively reconceptualize high standards in...</p>
                  <div className="article-author">
                    <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" />
                    <div>
                      <h6>Alexandra</h6>
                      <span>22 hrs ago</span>
                      <span className="article-author-dot" />
                      <span>4 min read</span>
                      <i className="fas fa-bookmark transition" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4" data-pg-collapsed>
              <div className="article transition">
                <a href="single-article.html" className="link-surface" />
                <div className="article-cover">
                  <img src="assets/images/articles/tim-gouw-68319-unsplash.jpg" className="article-cover-img transition" />
                </div>
                <div className="article-item">
                  <span className="article-category">Technology</span>
                  <h4>5 ways to manage your time effectively.</h4>
                  <p>Distinctively coordinate pandemic technologies rather than market-driven meta-services. Distinctively reconceptualize high standards in...</p>
                  <div className="article-author">
                    <img src="assets/images/authors/photo-1524154217857-45f012d0f167.jpg" />
                    <div>
                      <h6>Alexandra</h6>
                      <span>22 hrs ago</span>
                      <span className="article-author-dot" />
                      <span>4 min read</span>
                      <i className="fas fa-bookmark transition" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="pagination justify-content-center mt-5">
            <li className="page-item">
              <a className="page-link" href="#"><i className="fas fa-chevron-left" /></a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">1</a>
            </li>
            <li className="page-item active">
              <a className="page-link active" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#"><i className="fas fa-chevron-right" /></a>
            </li>
          </ul>
        </div>
      </section>
    </main>

  );
}
