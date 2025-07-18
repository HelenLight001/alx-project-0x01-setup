import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6 flex-grow">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        <p>List of users will go here...</p>
      </main>
    </div>
  );
};

export default UsersPage;
