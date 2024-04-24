import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-lg mx-auto px-8 pb-16">
      <Header />
      {children}
    </div>
  );
}
