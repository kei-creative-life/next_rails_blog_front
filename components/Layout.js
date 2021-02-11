import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "This is Blog App" }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ariaHidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* ロゴ部分 */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <div className="cursor-pointer flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                </Link>

                {/* メニュー一覧 */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <Link href="blog-page">
                      <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                        All Blog
                      </a>
                    </Link>
                    <Link href="create-blog">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Create Blog
                      </a>
                    </Link>
                    <Link href="user-profile">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Edit Profile
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative">
                  {/* プロフィール画像 */}
                  <div>
                    <button
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* アコーディオンメニュー */}
          <div className="hidden sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="blog-page">
                <a className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                  All Blog
                </a>
              </Link>
              <Link href="create-blog">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Create Blog
                </a>
              </Link>
              <Link href="user-profile">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Edit Profile
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">{children}</main>
      <footer className="w-full h-12 bg-gray-800 text-white flex justify-center items-center">
        Blog App
      </footer>
    </div>
  );
}
