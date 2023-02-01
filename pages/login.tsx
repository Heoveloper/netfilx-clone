import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/use-auth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const { user, signUp, signIn, logout, error, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    // Sign In 버튼 클릭시
    if (login) {
      await signIn(email, password);
      // Sign Up 버튼 클릭시
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div
      className="relative h-screen w-screen flex flex-col bg-black
    md:items-center md:justify-center md:bg-transparent"
    >
      <Head>
        <title>Netfilx</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background Image */}
      <Image
        src="https://rb.gy/p2hphi"
        alt=""
        fill
        className="-z-10 !hidden opacity-60 sm:!inline object-cover"
        // objectFit="cover"
      />

      {/* Logo Image */}
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      {/* Login Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14 mt-24 space-y-8 rounded"
        action=""
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", {
                required: { value: true, message: "email required!" },
              })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light text-orange-500">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", {
                required: { value: true, message: "pw required!" },
              })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-ligh t text-orange-500">
                Your password must contain etween 4 and 60 characters.
              </p>
            )}
          </label>
        </div>

        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
        >
          Sign In
        </button>

        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
