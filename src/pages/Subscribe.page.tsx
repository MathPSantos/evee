import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/form/Button/Button.component';
import { Input } from '../components/common/form/Input.component';

import { Logo } from '../components/layout/Logo.component';

import { useCreateSubscriberMutation } from '../core/graphql/generated';

import codeMockupImg from '/src/assets/code-mockup.png';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            A plataforma de eventos para seu{' '}
            <strong className="text-green-500">crescimento profissional</strong>
            !
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Faça parte dos eventos que vão ser essênciais para seu crescimento
            profissional!
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded-xl">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            className="w-full flex flex-col gap-2"
            onSubmit={handleSubscribe}
          >
            <Input
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Button className="mt-4" isDisabled={loading} type="submit">
              Garantir minha vaga
            </Button>
          </form>
        </div>
      </div>

      <img src={codeMockupImg} className="mt-10" alt="" />
    </div>
  );
}
