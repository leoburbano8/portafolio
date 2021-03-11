import React from 'react';
import {
	FacebookShareButton,
	FacebookIcon,
	LinkedinShareButton,
	LinkedinIcon,
} from 'react-share';
import { Link } from 'react-scroll';

export default function Footer() {
   return (
		<div className='footer'>
			<div className='container'>
				<div className='row inner-wrapper'>
					<div className='col-lg-4 col-md-6 col-sm-6'>
						<div className='d-flex'>
							<>Popayán, Cauca</>
						</div>
						<div className='d-flex'>
							<a href='tel:+57-314-805-5946'>(57)314-805-5946</a>
						</div>
						<div className='d-flex'>
							<a href='mailto:mlisoftware@gmail.com'>
								mlisoftware21@gmail.com
							</a>
						</div>
					</div>
					<div className='col-lg-3 col-md-2 col-sm-6'>
						<div className='row'>
							<div className='col'>
								<Link to='home' smooth={true} offset={-110} className='footer-nav'>Inicio</Link>
								<br />
								<Link to='acerca' smooth={true} offset={-110} className='footer-nav'>Acerca de mi</Link>
								<br />
								<Link to='servicio' smooth={true} offset={-110} className='footer-nav'>Servicios</Link>
							</div>
							<div className='col'>
								<Link to='portafolio' smooth={true} offset={-110} className='footer-nav'>Portafolio</Link>
								<br />
								<Link to='contacto' smooth={true} offset={-110} className='footer-nav'>Contacto</Link>
							</div>
						</div>
					</div>

					<div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
						<div className='d-flex justify-content-center'>
							<FacebookShareButton
								url={'https://www.facebook.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<FacebookIcon className='mx-3' size={36} />
							</FacebookShareButton>
							<LinkedinShareButton
								url={'https://www.linkedin.com'}
								quote={'FullStack Developer'}
								hashtag='#javascript'
							>
								<LinkedinIcon className='mx-3' size={36} />
							</LinkedinShareButton>
						</div>
						<p className='pt-3 text-center'>
							Copyright &copy; 
							 {new Date().getFullYear()}&nbsp; MLI Software
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};