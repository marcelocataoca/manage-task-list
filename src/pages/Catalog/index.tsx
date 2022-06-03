import { AppBar, Toolbar } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ItemNav } from "./styles";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { CardTask } from "../../components/CardTask";
import { useModal } from "../../hooks/useModal";

export function Catalog() {
  const [titleList, setTitleList] = useState<string[]>([]);
  const {isModalVisible, setIsModalVisible} = useModal();
  const navigate = useNavigate();

  function handleLogout() {
    navigate("../Login");
  }   

  function handleOpenAdd(){
    setIsModalVisible(true);
  }

  function handleRemoveItem(id: number){    
    const newList = titleList.filter((item, index) => index != id);
    setTitleList(newList);
  }

  const containerList = {
    flex: 1,
    padding: 10,
    marginTop: 100,
  }

  return (
    <div>
      <AppBar>
        <Toolbar>
          <ItemNav aria-label="menu">
            <MenuIcon />
          </ItemNav>
          <h3 style={{ flex: 1 }}>AppBar</h3>
          <div style={{ display: "flex", marginRight: 30 }}>
            <Button
              variant="contained"
              style={{ color: "#fff" }}
              onClick={handleOpenAdd}
            >
              Adicionar
            </Button>
            <ItemNav style={{display: 'flex', alignItems:'center'}}>Produtos</ItemNav>
            <ItemNav style={{display: 'flex', alignItems:'center'}}>Sobre</ItemNav>
          </div>
          <Button
            variant="outlined"
            style={{ color: "#fff" }}
            onClick={handleLogout}
          >
            Sair  
          </Button>
        </Toolbar>
        {isModalVisible && <Modal titleList={titleList} setList={setTitleList}/>}
      </AppBar>
      <Container style={containerList}>
        {titleList.length > 0 && titleList.map((itemList, index) => {
          return (<CardTask title={itemList} handleDelete={() => handleRemoveItem(index)}/>)
        })} 
      </Container>
    </div>
  );
}
