import { auth } from "@/lib/data/repository/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";

export const email = ref(localStorage.getItem("rememberMe") || "");
export const password = ref("");
export const rememberMe = ref(
  localStorage.getItem("rememberMe") ? true : false
);

export const signInWithEmail = async (
  email: string,
  password: string,
  router: any
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    if (rememberMe.value) {
      localStorage.setItem("rememberMe", email);
    } else {
      localStorage.removeItem("rememberMe");
    }
    window.alert("You have successfully signed in");

    // Check if the email contains 'user' or 'admin' and redirect accordingly
    if (email.includes("user")) {
      router.push("/dashboard");
    } else if (email.includes("admin")) {
      router.push("/admin-dashboard");
    } else {
      router.push("/dashboard");
    }
  } catch (error: any) {
    window.alert(error.message);
  }
};
