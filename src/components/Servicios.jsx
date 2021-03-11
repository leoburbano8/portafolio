import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'


export default function Servicios() {
	return (
		<div id='servicio' className='services'>
			<h1 className='services-title py-5'>Mis Servicios</h1>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faDesktop}
									size='2x'
								/>
							</div>
							<h3 className='service--sub-title'>Diseño Web</h3>
							<p>
							 Manejo cada proyecto de forma individual y siempre me centro en el resultado.
							</p>
						</div>
					</div>
					{/* - */}
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faFileCode}
									size='2x'
								/>
							</div>
							<h3 className='service--sub-title'>Desarrollo Web</h3>
							<p>
                            Su sitio web se construirá con las nuevas tecnologías.
							</p>
						</div>
					</div>
					{/* - */}
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faFacebook}
									size='2x'
								/>
							</div>
							<h3 className='service--sub-title'>Facebook Ads</h3>
							<p>
                            Tus clientes potenciales podran observar tus servicios o productos en Facebook.
							</p>
						</div>
					</div>
					{/* - */}
					<div className='col-lg-3 col-md-6 col-sm-6'>
						<div className='box'>
							<div className='circle'>
								<FontAwesomeIcon
									className='icon'
									icon={faGoogle}
									size='2x'
								/>
							</div>

							<h3 className='service--sub-title'>Google Ads</h3>
							<p>
                                Su servicio o producto aparecerá en la parte superior de la Búsqueda de Google.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}