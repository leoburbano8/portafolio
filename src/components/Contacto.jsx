import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

export default function Contact() {
	const [successMessage, setSuccessMessage] = useState('');
	const { register, handleSubmit, errors } = useForm();

	const serviceID = 'service_2k2lap9';
	const templateID = 'template_r2v1vzz';
	const userID = 'user_i1qKwfiNeG2O9akSvrtCa';

	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				phone: data.phone,
				email: data.email,
				subject: data.subject,
				description: data.description,
			},
			userID
		)
		r.target.reset();

	}


const sendEmail = (serviceID, templateID, variables, userID) => {

	emailjs
		.send(serviceID, templateID, variables, userID)
		.then(() => {
			setSuccessMessage(
				"Su mensaje ha sido enviado. Me contactare lo más pronto posible."
			);
		})
		.catch(err => console.error(`Something went wrong ${err}`));
};

   return (
		<div id='contacto' className='contacts'>
			<div className='text-center'>
				<h1>Contacto</h1>
				<p className='pcontact'>
					Llena el formulario, describe brevemente tu producto y nos comunicaremos
                    contigo lo más pronto posible.
				</p>
				<span className='success-message'>{successMessage}</span>
			</div>
			<div className='container'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='row'>
						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Nombre y Apellido'
									name='name'
									ref={register({
										required: 'Nombre y Apellido son requeridos',
										pattern: {
											value: /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i,
											message: 'Nombre y Apellido invalidos',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.name && errors.name.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Número de telefono'
									name='phone'
									ref={register({
										required: 'El número de telefono es requerido',
										pattern: {
											value: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/i,
											message: 'Número de telefono invalido',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.phone && errors.phone.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='email'
									placeholder='Email'
									name='email'
									ref={register({
										required: 'El correo es requerido',
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											message: 'El correo es invalido',
										},
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.email && errors.email.message}
							</span>

							<div className='text-center'>
								<input
									className='form-control'
									type='text'
									placeholder='Asunto'
									name='subject'
									ref={register({
										required: 'El Asunto es requerido',
									})}
								/>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.subject && errors.subject.message}
							</span>
						</div>

						<div className='col-md-6 col-xs-12'>
							<div className='text-center'>
								<textarea
									className='form-control'
									type='text'
									placeholder='Mensaje'
									name='description'
									ref={register({
										required: 'El Mensaje es requerido',
										minLength: {
											value: 30,
											message:
												'El mensaje debe tener al menos 30 caracteres',
										},
									})}
								></textarea>
								<div className='line'></div>
							</div>
							<span className='error-message'>
								{errors.description && errors.description.message}
							</span>
							<button
								className='btn-main contact-btn'
								type='submit'
							>
								Enviar Mensaje
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};