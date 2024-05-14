import React from "react";
import { getUsers } from "../../api/handlersUsers";
import HeaderBar from "../../components/headers/Header";
import Modal from "../../components/modals/Modals";
import Register from "../register/Register";

const Home = () => {
  return (
    <div className="">
      <HeaderBar />
      <main className="">
        <div>
          <img src="https://raw.githubusercontent.com/HKevinH/PrototypesHtmls/master/assets/logo.png" />
        </div>
      </main>
    </div>
  );
};

export default Home;
