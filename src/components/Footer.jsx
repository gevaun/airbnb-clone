export default function Footer() {
  return (

    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              This is a clone of Airbnb, done apart of the <span className="italic">Learn React</span> course on Scrimba.
            </p>
            <p className="text-xs text-gray-600 dark:text-neutral-400">Using Tailwind CSS</p>
            <p className="text-xs text-gray-600 dark:text-neutral-400"><a href="https://www.flaticon.com/free-icons/airbnb" target="new" title="airbnb icons">Airbnb icons created by riajulislam - Flaticon</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
