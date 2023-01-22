import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Formulario = () => {
	const [sended, setSended] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={ ({ nombre, correo }) => {
					let errores = {};

					if(!nombre){
						errores.nombre = "Please set a name";
					}
					if(!correo){
						errores.correo = "Please set a email";
					}
					return errores;
				} }
				onSubmit={ ( valores, {resetForm} ) => {
					resetForm();
					setSended(true);
					setTimeout(() => {
						setSended(false);
					}, 5000);
				}}
			>
				{
					// ( { handleSubmit, values, handleChange, handleBlur, errors, touched } ) => (
					( { values, handleChange, handleBlur, errors, touched } ) => (
						<Form className='formulario' >
							<div>
								<label htmlFor='nombre'>Nombre</label>
								<Field
									type="text"
									id="nombre"
									name='nombre'
									placeholder='Josué Zea'
								/>
								<ErrorMessage name='nombre' component={() => {
									<div className='error'>{errors.nombre}</div>
								}}/>
							</div>
							<div>
								<label htmlFor='correo'>Correo</label>
								<Field
									type="text"
									id="correo"
									name='correo'
									placeholder='correo@correo.com'
								/>
								<ErrorMessage name='correo' component={() => {
									<div className='error'>{errors.correo}</div>
								}}/>
							</div>
							<button>
								Enviar
							</button>
							{
								sended &&
								<p className='exito'>Form sended success</p>
							}
						</Form>
					)
				}
			</Formik>
		</>
	);
}

export default Formulario;


//Actual 84, siguiente 