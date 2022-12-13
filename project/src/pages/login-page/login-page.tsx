import { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { loginAction } from '../../store/api-actions';

export default function Login() {
  const dispatch = useAppDispatch();
  const emptyFormState = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(emptyFormState);

  const fieldChangeHandle = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginAction({email: formData.email, password: formData.password}));
    setFormData(emptyFormState);
  };

  return (

    <div className='page page--gray page--login'>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action='#' method='post' onSubmit={handleFormSubmit}>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input className='login__input form__input' type='email' name='email' placeholder='Email' required onChange={fieldChangeHandle}/>
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input className='login__input form__input' type='password' name='password' placeholder='Password' required onChange={fieldChangeHandle}/>
              </div>
              <button className='login__submit form__submit button' type='submit'>Sign in</button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <a className='locations__item-link' href='/'>
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}
