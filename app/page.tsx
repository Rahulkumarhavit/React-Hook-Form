"use client"
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form"


type FormData = {
  firstName: string
  lastName: string
  age: number
  email: string
  address: string
}

export default function Home() {

  const { register, formState: { errors }, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {

    alert("Form Submitted")
    window.location.pathname="/"

  }

  return (
    <main className=" flex items-center justify-center h-screen ">
      <div className=" w-96 bg-white border py-5 px-10 border-gray-600 rounded-lg font-mono ">
        <div className="text-2xl text-center font-bold mb-10">User Registration</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">


            <input type="text" placeholder="FirstName" className="border-2 border-gray-600 rounded p-1 text-lg w-full"
              {...register("firstName", { required: "First Name is required", maxLength: 20 })} />
            {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
          </div>
          <div className="mb-5">


            <input type="text" placeholder="LastName" className="border-2 border-gray-600 rounded p-1 text-lg w-full" {...register("lastName", { required: "Last Name is required", maxLength: 20 })} />
            {errors.lastName && <p role="alert">{errors.lastName.message}</p>}
          </div>
          <div className="mb-5">


            <input type="number" placeholder="Age" className="border-2 border-gray-600 rounded p-1 text-lg w-full" {...register("age", { required: "Age is required", min: 0, max: 90 })} />
            {errors.age && <p role="alert">{errors.age.message}</p>}
          </div>
          <div className="mb-5">


            <input type="email" placeholder="Email" className="border-2 border-gray-600 rounded p-1 text-lg w-full" {...register("email", { required: "Email Address is required" })} />
            {errors.email && <p role="alert">{errors.email.message}</p>}
          </div>
          <div className="mb-5">


            <input type="text" placeholder="Address" className="border-2 border-gray-600 rounded p-1 text-lg w-full" {...register("address", { required: "Address is required" })} />
            {errors.address && <p role="alert">{errors.address.message}</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="border-2 px-4 py-2 rounded-full bg-slate-600 text-white " >Submit</button>
          </div>
        </form>

      </div>

    </main>
  );
}
