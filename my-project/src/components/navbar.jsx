import { useState } from "react";

export const Navbar = () => {
  const [documentName, setDocumentName] = useState("welcome.md");
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(documentName);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar

  const handleInputChange = (e) => {
    setTempName(e.target.value);
  };

  const handleSave = () => {
    if (!tempName.endsWith(".md")) {
      const newName = tempName + ".md";
      setDocumentName(newName);
      setIsEditing(false);
    } else {
      setDocumentName(tempName);
      setIsEditing(false);
    }
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-1 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex justify-center font-semibold px-2 text-white">
            <button id="openBtn" onClick={handleOpenSidebar}>
              <img
                src="/src/assets/icon-menu.svg"
                className="px-3"
                alt="Menu Icon"
              />
            </button>
            MARKDOWN
          </div>
          <span className="border-l border-white mx-4 h-10" />

          <div className="flex flex-row justify-center ml-5">
            <img
              src="/src/assets/icon-document.svg"
              alt="Document Icon"
              className="h-8 w-5 my-auto"
            />
            <div className="text-gray-400 text-lg font-semibold items-center ml-5 flex-col justify-center">
              <p>Document Name</p>
              {isEditing ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={tempName}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    autoFocus
                    className="bg-transparent text-white focus:outline-none focus:border-b border-white caret-red-500"
                  />
                </div>
              ) : (
                <p
                  className="text-white cursor-pointer"
                  onClick={() => setIsEditing(true)}
                >
                  {documentName}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <button id="deleteDocBtn">
            <p className="mr-2">
              <img src="/src/assets/icon-delete.svg" alt="Delete Icon" />
            </p>
          </button>

          <button
            id="saveDocBtn"
            className="ml-2 items-center text-white flex flex-row bg-customRed p-2 rounded-sm mr-4"
          >
            <img
              src="/src/assets/icon-save.svg"
              className="mr-2"
              alt="Save Icon"
            />
            Save Changes
          </button>
        </div>
      </nav>
      
      <div className={`fixed inset-0 z-50 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} bg-gray-900 bg-opacity-75`}>
        <div className="w-64 bg-gray-800 h-full p-4">
          <div className="flex justify-end">
            <button id="closeBtn" onClick={handleCloseSidebar}>
              <img
                src="/src/assets/icon-close.svg"
                className="flex justify-between"
                alt="Close Icon"
              />
            </button>
          </div>

        </div>
      </div>

      <script src="script.js"></script>
    </>
  );
};
