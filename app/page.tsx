"use client";

import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import scrimRules from "../app/staticfiles/rules.json"

type FormData = {
  name: string;
  tag: string;
  discord: string;
  equipe: string;
};

export default function Home() {
  const mockAPI = async () => {
    return new Promise<FormData>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: "Loren",
          tag: "TSM",
          discord: "@everyone",
          equipe: "TeamName"
        });
      }, 3000);
    });
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    //defaultValues: async () => mockAPI(),

  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
    console.log(data);

  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors);

  // console.log(register("name"));

  return (
    <div className="isolate bg-white px-6 py-2 sm:py-4 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          South America Scrims
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Formulario Inscrição
        </p>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Partidas todos os dias as 20h
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nick Captão:
            </label>
            <div className="mt-2.5">
              <input
                {...register("name", {
                  required: "Nome é requerido.",
                  minLength: {
                    value: 4,
                    message: "Nome precisa ter pelo menos 4 caracteres",
                  },
                })}
                type="text"
                name="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors?.name && (
                <span className="text-red-700">{errors.name.message}</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="tag"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              TAG da equipe (ex TSM)
            </label>
            <div className="mt-2.5">
              <input
                {...register("tag", {
                  required: "TAG é obrigatorio.",
                  minLength: {
                    value: 2,
                    message: "Nome precisa ter pelo menos 2 caracteres",
                  },
                })}
                type="text"
                name="tag"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="discord"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Discord Captão (ex: tvkaoz)
            </label>
            <div className="mt-2.5">
              <input
                {...register("discord", {
                  required: "Discord é obrigatorio.",
                  minLength: {
                    value: 2,
                    message: "Precisa ter pelo menos 2 caracteres",
                  },
                })}
                type="text"
                name="discord"
                id="discord"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
             Nome e plataforma da equipe:
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="platform" className="sr-only">
                  Selecione
                </label>
                <select
                  id="platform"
                  name="platform"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-1 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>PS</option>
                  <option>XBOX</option>
                  <option>PC</option>
                </select>
              </div>
              <input
                {...register("equipe", {
                  required: "Nome da equipe é obrigatorio.",
                  minLength: {
                    value: 3,
                    message: "Nome precisa ter pelo menos 3 caracteres",
                  },
                })}
                type="text"
                name="platform"
                autoComplete="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mensagem
            </label>
            <div className="mt-2.5">
              <p className="block w-full text-gray-900 sm:text-sm sm:leading-6">
                <h2>Servidor: {scrimRules.compRules.scrims.horarios.servidor}</h2>
                <h3>Horários</h3>
                <ul>
                  <li><strong>Check-in Abre:</strong> {scrimRules.compRules.scrims.horarios.checkInAbre}</li>
                  <li><strong>Check-in Fecha: </strong>{scrimRules.compRules.scrims.horarios.checkInFecha}</li>
                  <li><strong>Horário de inicio da scrim:</strong> {scrimRules.compRules.scrims.horarios.inicioScrim}</li>
                </ul>
                <center><h4><strong>Regras Gerais:</strong></h4></center>
                <ul>
                  {scrimRules.compRules.scrims.regras.gerais.map((rule) => (
                    <li key={rule.titulo}>
                      <strong>{`${rule.titulo}:`}</strong> {rule.descricao}
                    </li>
                  ))}
                </ul>
                <center><h4><strong>Drop Spots:</strong></h4></center>
                <ul>
                {scrimRules.compRules.scrims.regras.dropSpots.map((rule) => (
                    <li key={rule.titulo}>
                      <strong>{`${rule.titulo}:`}</strong> {rule.descricao}
                    </li>
                  ))}
                </ul>
                <center><h3><strong>Observações:</strong></h3></center>
                <p><strong>{scrimRules.compRules.scrims.observacoes.titulo}</strong>: {scrimRules.compRules.scrims.observacoes.descricao}</p>

              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 m-4 items-center">
          <input
            type="checkbox"
            name="privacePolicy"
            className="text-sm leading-6 text-gray-600 border rounded-sm shadow-sm"
          />
          <p className="text-slate-600">
            Você aceita nossa{" "}
            <a href="#" className="font-semibold text-indigo-600">
              Política&nbsp;Privacidade
            </a>
            .
          </p>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}