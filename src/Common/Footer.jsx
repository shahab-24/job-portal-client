import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img src="https://img.icons8.com/?size=64&id=49502&format=png
" alt="" />
    <p>
     JOB Portal Ltd.
      <br />
      Providing reliable Jobs since 1992
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
		</div>
	);
};

export default Footer;