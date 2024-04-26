import React from "react";

const RegisterCom = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-white">
      <div class="max-w-md w-full space-y-8">
        <h3 class="text-center text-black tracking-widest text-3xl font-extrabold">
          Cepetan Daftar Napaaa
        </h3>
        <div class="bg-gray-200 p-6 rounded-lg">
          <h2 class="text-center text-3xl font-extrabold mb-8">REGISTER</h2>
          <form class="space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="name" class="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  class="rounded-full w-full px-4 py-2 placeholder-gray-500 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#3589C1] focus:border-transparent"
                  placeholder="Name"
                />
              </div>
              <div>
                <label for="username" class="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  class="rounded-full w-full px-4 py-2 placeholder-gray-500 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#3589C1] focus:border-transparent"
                  placeholder="Username"
                />
              </div>
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  class="rounded-full w-full px-4 py-2 placeholder-gray-500 bg-white mb-4 focus:outline-none focus:ring-2 focus:ring-[#3589C1] focus:border-transparent"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  class="rounded-full w-full px-4 py-2 placeholder-gray-500 bg-white mb-6 focus:outline-none focus:ring-2 focus:ring-[#3589C1] focus:border-transparent"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full py-2 px-4 border border-transparent text-lg font-semibold rounded-full shadow-sm text-white bg-[#3589C1] hover:bg-indigo-700 transition duration-300"
              >
                Register
              </button>
              <p class="text-gray-600 text-center mt-4">
                Already have an account?
                <a href="#" class="text-[#3589C1] hover:underline">
                  Login here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterCom;
