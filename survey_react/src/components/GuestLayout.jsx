import { Outlet } from "react-router-dom";

export const GuestLayout = () => {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            {/* a component inside which a child component can be rendered */}
            <Outlet />
          </div>
    </div>
  )
}
