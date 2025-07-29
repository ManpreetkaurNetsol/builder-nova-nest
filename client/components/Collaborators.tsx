import React from "react";
import { X, Trash2, User } from "lucide-react";

interface Collaborator {
  id: string;
  name: string;
  email: string;
  role: string;
}

const Collaborators: React.FC = () => {
  const collaborators: Collaborator[] = [
    {
      id: "1",
      name: "netsolutions",
      email: "sneha.saurav@netsolutions.com",
      role: "Business Analyst",
    },
    {
      id: "2", 
      name: "Diana ICC",
      email: "dianaaticc@yopmail.com",
      role: "Client",
    },
    {
      id: "3",
      name: "Saumya",
      email: "saumya@netsolutions.com", 
      role: "Business Analyst",
    },
    {
      id: "4",
      name: "netsolutions",
      email: "sneha.saurav@netsolutions.com",
      role: "Client",
    },
    {
      id: "5",
      name: "Micheal",
      email: "michealicc@yopmail.com",
      role: "Client",
    },
  ];

  const handleDelete = (id: string) => {
    console.log("Delete collaborator:", id);
  };

  return (
    <div className="flex w-full max-w-4xl mx-auto bg-white font-proxima">
      <div className="flex flex-col w-full p-6 gap-6 rounded-2xl bg-white shadow-[0_16px_40px_4px_rgba(0,0,0,0.06)]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Collaborators
          </h1>
          <button className="flex w-8 h-8 p-1.5 justify-center items-center rounded-lg hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
          </button>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 rounded-t-lg border-b border-gray-200">
            <div className="col-span-3 text-sm font-medium text-gray-700">
              Name
            </div>
            <div className="col-span-4 text-sm font-medium text-gray-700">
              Email Address
            </div>
            <div className="col-span-3 text-sm font-medium text-gray-700">
              Role
            </div>
            <div className="col-span-2 text-sm font-medium text-gray-700">
              Action
            </div>
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-b-lg overflow-hidden">
            {collaborators.map((collaborator, index) => (
              <div
                key={collaborator.id}
                className={`grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-gray-50 transition-colors ${
                  index !== collaborators.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="col-span-3 flex items-center gap-3">
                  <div className="w-6 h-6 text-gray-500">
                    <User className="w-full h-full" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm text-gray-900 font-medium">
                    {collaborator.name}
                  </span>
                </div>
                <div className="col-span-4">
                  <span className="text-sm text-gray-700">
                    {collaborator.email}
                  </span>
                </div>
                <div className="col-span-3">
                  <span className="text-sm text-gray-700">
                    {collaborator.role}
                  </span>
                </div>
                <div className="col-span-2">
                  <button
                    onClick={() => handleDelete(collaborator.id)}
                    className="flex w-8 h-8 p-1.5 justify-center items-center rounded-lg hover:bg-red-50 transition-colors group"
                  >
                    <Trash2 className="w-5 h-5 text-red-500 group-hover:text-red-600" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
