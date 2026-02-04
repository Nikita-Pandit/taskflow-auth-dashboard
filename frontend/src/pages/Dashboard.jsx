import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState("");
  const [profile, setProfile] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
const [profileForm, setProfileForm] = useState({ name: "", email: "" });


  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  // useEffect(() => {
  //   fetchTasks();
  //   api.get("/me").then(res => setProfile(res.data));
  // }, []);


  useEffect(() => {
  fetchTasks();
  api.get("/me").then(res => {
    setProfile(res.data);
    setProfileForm({
      name: res.data.name,
      email: res.data.email
    });
  });
}, []);


  const handleSubmit = async () => {
    if (!title.trim()) return;

    if (editingId) {
      await api.put(`/tasks/${editingId}`, { title });
      setEditingId(null);
    } else {
      await api.post("/tasks", { title });
    }

    setTitle("");
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto p-6">

    



          {profile && (
  <div className="bg-white p-4 rounded shadow mb-6">
    {!isEditingProfile ? (
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg">{profile.name}</p>
          <p className="text-sm text-gray-500">{profile.email}</p>
        </div>

        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => setIsEditingProfile(true)}
        >
          Edit Profile
        </button>
      </div>
    ) : (
      <div className="space-y-3">
        <input
          className="input"
          value={profileForm.name}
          onChange={e =>
            setProfileForm({ ...profileForm, name: e.target.value })
          }
        />
        <input
          className="input"
          value={profileForm.email}
          onChange={e =>
            setProfileForm({ ...profileForm, email: e.target.value })
          }
        />

        <div className="flex gap-2">
          <button
            className="btn-primary"
            onClick={async () => {
              const res = await api.put("/me", profileForm);
              setProfile(res.data);
              setIsEditingProfile(false);
            }}
          >
            Save
          </button>

          <button
            className="px-4 py-2 rounded border"
            onClick={() => {
              setProfileForm({
                name: profile.name,
                email: profile.email
              });
              setIsEditingProfile(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    )}
  </div>
)}


          {/* TASK HEADER */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">My Tasks</h2>
            <input
              className="input w-64"
              placeholder="Search tasks..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {/* ADD TASK */}
          <div className="bg-white p-4 rounded shadow mb-6 flex gap-2">
            <input
              className="input flex-1"
              placeholder="Enter task title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <button className="btn-primary" onClick={handleSubmit}>
              {editingId ? "Update" : "Add"}
            </button>
          </div>

          {/* TASK LIST */}
          {filteredTasks.length === 0 ? (
            <div className="text-center text-gray-500 bg-white p-6 rounded shadow">
              No tasks found. Start by adding one ✨
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map(task => (
                <div key={task._id} className="task-card">
                  <span>{task.title}</span>
                  <div className="space-x-2">
                    <button
                      className="btn-edit"
                      onClick={() => {
                        setTitle(task.title);
                        setEditingId(task._id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Dashboard;
