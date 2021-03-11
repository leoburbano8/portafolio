import React from 'react';
import bienesRaices from '../img/bienesraices.PNG';
import hotelPrueba from '../img/hotelprueba.PNG';
import crmClientes from '../img/crmclientes.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

export default function Portfolio() {
	//**************** Bienes Raices ****************//
	const openPopupboxBienesRaices = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={bienesRaices}
					alt='Bienes Raices'
				/>
				<p>
					Sitio Web de Bienes Raices desarrollado con Gatsby.js
				</p>
				<b>URL:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open('https://lucid-williams-957093.netlify.app')
					}
				>
					https://lucid-williams-957093.netlify.app
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: 'Bienes Raices'
				}
			}
		});
	};

	const popupboxConfigBienesRaices = {
		titleBar: {
			enable: true,
			text: 'Bienes Raices',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};
    
    //**************** Hotel Prueba ****************//
	const openPopupboxHotelPrueba = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={hotelPrueba}
					alt='Hotel Prueba'
				/>
				<p>
					Hotel Prueba desarrollado con Gatsby.js
				</p>
				<b>URL:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://hopeful-williams-75ce92.netlify.app'
						)
					}
				>
					https://hopeful-williams-75ce92.netlify.app
				</a>
				</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: 'Hotel Prueba',
				},
			},
		});
	};

	const popupboxConfigHotelPrueba = {
		titleBar: {
			enable: true,
			text: 'Hotel Prueba',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	//**************** CRM Clientes ****************//
	const openPopupboxCrmCliente = () => {
		const content = (
			<>
				<img
					className='portfolio-image-popupbox'
					src={crmClientes}
					alt='CRM Clientes'
				/>
				<p>
                    CRM Clientes desarrollado con Next.js, Apollo, MongoDB & GraphQL.<br />
					Datos para ingresar: 
					Usuario: pruebas@c.com
				    Contraseña: 123456
				</p>
				<b>URL:</b>{' '}
				<a
					className='hyper-link'
					onClick={() =>
						window.open(
							'https://crmcliente-leoburbano8.vercel.app/login'
						)
					}
				>
				    https://crmcliente-leoburbano8.vercel.app/login
				</a>
				
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({
			content,
			config: {
				titleBar: {
					text: 'CRM Clientes',
				},
			},
		});
	};

	const popupboxConfigCrmClientes = {
		titleBar: {
			enable: true,
			text: 'CRM Clientes',
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div id='portafolio' className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>Portafolio</h1>
				<div className='image-box-wrapper row justify-content-center'>
					<div
						className='portfolio-image-box'
						onClick={openPopupboxBienesRaices}
					>
						<img
							className='portfolio-image'
							src={bienesRaices}
							alt='Bienes Raices'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

					

					<div
						className='portfolio-image-box'
						onClick={openPopupboxHotelPrueba}
					>
						<img
							className='portfolio-image'
							src={hotelPrueba}
							alt='Hotel Prueba'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

				

					<div
						className='portfolio-image-box'
						onClick={openPopupboxCrmCliente}
					>
						<img
							className='portfolio-image'
							src={crmClientes}
							alt='Next.js, Apollo, MongoDB & GraphQl'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

					

					</div>
			</div>
			<PopupboxContainer {...popupboxConfigBienesRaices} />
            <PopupboxContainer {...popupboxConfigHotelPrueba} />
            <PopupboxContainer {...popupboxConfigCrmClientes} />


    </div>
	);
}