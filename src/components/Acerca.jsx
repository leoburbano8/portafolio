import React from 'react';
import author from '../img/acerca.jpg';

export default function Acerca() {
	return (
		<div id='acerca' className='container py-5'>
			<div className='row'>
				<div className='col-lg-6 col-xs-12'>
					<div className='photo-wrap mb-5'>
						<img
							className='profile-img'
							src={author}
                        />
					</div>
				</div>
				<div className='about-info col-lg-6 col-xs-12'>
					<h1 className='about-heading'>Acerca de mi</h1>
               <p className='pacerca'>
                  ¡Hola! Soy Leandro Burbano. He estado desarrollando aplicaciones web por 1 año. Soy un Desarrollador Web Full-Stack. Las tecnologías que uso son MERN(MongoDB, Express, ReactJS and NodeJS).

                  Creación de sitios web responsivos que son desplegados en todos los dispositivos de escritorio y smartphones.
					
				  Creación de campañas de publicidad en Google AdWords y Facebook
               </p>
				</div>
			</div>
		</div>
	);
}