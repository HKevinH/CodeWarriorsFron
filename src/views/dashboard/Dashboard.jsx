mport HeaderBar from "../../components/headers/Header";
import { useNavigate } from "react-router-dom";
import { Tables } from "../../components/tables/Tables";
import { Avatar } from "../../components/avatar/Avatar";
import { CardContent } from "../../components/card/Card";
import SAD_ICON from "../../assets/img/Sad.png";
import EMAIL_ICON from "../../assets/img/Email.png";
import ONLINE_ICON from "../../assets/img/Online.png";
import START_ICON from "../../assets/img/Star.png";
import { ListItemWithIcon } from "../../components/list/ListItem";
const Dashboard = () => {
    const navigate = useNavigate();
    
  const items = [
    {
      title: "Preguntas Frecuentes",
      click: () => {
        navigate("/help");
      },
    },
    {
      title: "Inicio",
      click: () => {
        navigate("/");
      },
    },
  ];

  const ListItemIcons = [
    {
      icon: SAD_ICON,
      title: "Sin Clasificar",
    },
    {
      title: `Nombre: Usuario`,
    },
    {
      icon: EMAIL_ICON,
      title: "ejemplo@gmail.com",
    },
    {
      icon: ONLINE_ICON,
      title: "Ultima conexion: 12/12/2021",
    },
    {
      icon: START_ICON,
      title: "Contribuciones: 0",
    },
  ];

  return (
    <>
      <header>
        <HeaderBar items={items} />
        <h1 className="text-blue-color text-center font-bold my-5 text-2xl">
          Panel de usuario
        </h1>
      </header>

      <main className="m-10">
        <header>
          <CardContent>
            <div
              className="flex flex-row p-6 h=full
            "
            >
              <div className="w-1/2">
                <Avatar alt="Avatar" />
              </div>
              <div className="w-1/2 items-center justify-center h-[100%] pt-20">
                {ListItemIcons.map((item, index) => (
                  <ListItemWithIcon
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    click={item.click}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </header>
        <Tables />
      </main>
    </>
  );
};

export default Dashboard;
