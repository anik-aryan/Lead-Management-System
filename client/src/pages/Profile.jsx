import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import api from "../services/api";
import toast from "react-hot-toast";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [savingProfile, setSavingProfile] =
    useState(false);
  const [changingPassword, setChangingPassword] =
    useState(false);

  const [showCurrent, setShowCurrent] =
    useState(false);
  const [showNew, setShowNew] =
    useState(false);
  const [showConfirm, setShowConfirm] =
    useState(false);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [passwords, setPasswords] =
    useState({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  // ==========================
  // Fetch Profile
  // ==========================

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await api.get("/auth/me");

      setProfile({
        name: res.data.data.name || "",
        email: res.data.data.email || "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Update Profile
  // ==========================

  const handleProfileUpdate =
    async (e) => {
      e.preventDefault();

      if (!profile.name.trim()) {
        return toast.error(
          "Name is required"
        );
      }

      if (!profile.email.trim()) {
        return toast.error(
          "Email is required"
        );
      }

      try {
        setSavingProfile(true);

        await api.patch(
          "/auth/profile",
          profile
        );

        toast.success(
          "Profile updated successfully"
        );
      } catch (error) {
        console.log(error);

        toast.error(
          error.response?.data?.message ||
            "Something went wrong"
        );
      } finally {
        setSavingProfile(false);
      }
    };

  // ==========================
  // Change Password
  // ==========================

  const handlePasswordChange =
    async (e) => {
      e.preventDefault();

      if (
        !passwords.currentPassword ||
        !passwords.newPassword ||
        !passwords.confirmPassword
      ) {
        return toast.error(
          "All fields are required"
        );
      }

      if (
        passwords.newPassword.length <
        6
      ) {
        return toast.error(
          "Password must be at least 6 characters"
        );
      }

      if (
        passwords.newPassword !==
        passwords.confirmPassword
      ) {
        return toast.error(
          "Passwords do not match"
        );
      }

      try {
        setChangingPassword(true);

        await api.patch(
          "/auth/change-password",
          {
            currentPassword:
              passwords.currentPassword,
            newPassword:
              passwords.newPassword,
          }
        );

        toast.success(
          "Password changed successfully"
        );

        setPasswords({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.log(error);

        toast.error(
          error.response?.data?.message ||
            "Something went wrong"
        );
      } finally {
        setChangingPassword(false);
      }
    };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[70vh]">
          <p className="text-lg font-semibold">
            Loading Profile...
          </p>
        </div>
      </Layout>
    );
  }

  return (
          <Layout>
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your account information and password.
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <div className="flex flex-col items-center">

            <div className="w-24 h-24 rounded-full bg-lime-500 text-white flex items-center justify-center text-4xl font-bold">
              {profile.name?.charAt(0)?.toUpperCase()}
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              {profile.name}
            </h2>

            <p className="text-gray-500">
              {profile.email}
            </p>

          </div>

          <form
            onSubmit={handleProfileUpdate}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>

              <div className="relative">

                <User
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      name: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-lime-500 outline-none"
                />

              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={18}
                />

                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      email: e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 focus:ring-2 focus:ring-lime-500 outline-none"
                />

              </div>
            </div>

            <div className="md:col-span-2">

              <button
                type="submit"
                disabled={savingProfile}
                className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-xl font-semibold transition disabled:opacity-50 flex items-center gap-2"
              >

                <Save size={18} />

                {savingProfile
                  ? "Saving..."
                  : "Save Changes"}

              </button>

            </div>

          </form>

        </div>

        {/* Password Card */}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">

          <h2 className="text-xl font-bold mb-6">
            Change Password
          </h2>

          <form
            onSubmit={handlePasswordChange}
            className="space-y-6"
          >

            {/* Current */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Current Password
              </label>

              <div className="relative">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={18}
                />

                <input
                  type={
                    showCurrent
                      ? "text"
                      : "password"
                  }
                  value={
                    passwords.currentPassword
                  }
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      currentPassword:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-12 py-3 focus:ring-2 focus:ring-lime-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrent(
                      !showCurrent
                    )
                  }
                  className="absolute right-4 top-3.5"
                >
                  {showCurrent ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* New */}

            <div>

              <label className="block text-sm font-medium mb-2">
                New Password
              </label>

              <div className="relative">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={18}
                />

                <input
                  type={
                    showNew
                      ? "text"
                      : "password"
                  }
                  value={
                    passwords.newPassword
                  }
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      newPassword:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-12 py-3 focus:ring-2 focus:ring-lime-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowNew(!showNew)
                  }
                  className="absolute right-4 top-3.5"
                >
                  {showNew ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            {/* Confirm */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <Lock
                  className="absolute left-4 top-3.5 text-gray-400"
                  size={18}
                />

                <input
                  type={
                    showConfirm
                      ? "text"
                      : "password"
                  }
                  value={
                    passwords.confirmPassword
                  }
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      confirmPassword:
                        e.target.value,
                    })
                  }
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-12 py-3 focus:ring-2 focus:ring-lime-500 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirm(
                      !showConfirm
                    )
                  }
                  className="absolute right-4 top-3.5"
                >
                  {showConfirm ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>

            <button
              type="submit"
              disabled={changingPassword}
              className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold transition disabled:opacity-50"
            >
              {changingPassword
                ? "Changing..."
                : "Change Password"}
            </button>

          </form>

        </div>

      </div>
    </Layout>
  );
}