import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Table } from "antd";

import Layout from "../../components/layout/Layout";
import { SelectContacts } from "../../features/ContactsSlice";
import {
  Contact,
  useGetContactsQuery,
  useRemoveContactMutation,
} from "../../app/service/contacts";
import Loader from "../../components/loader/Loader";
import SendForm from "../../components/sendForm/SendForm";
import CustomButton from "../../components/customButton/CustomButton";
import { DeleteOutlined } from "@ant-design/icons";

const Contacts = () => {
  const { isLoading, data } = useGetContactsQuery();
  const contacts = useSelector(SelectContacts);
  const [doRemoveContact] = useRemoveContactMutation();

  const [oppen, setOppen] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact>();

  if (isLoading) {
    return <Loader />;
  }

  const columns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Номер",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "delete",
      key: "delete",
      render: () => (
        <CustomButton danger={true}>
          <DeleteOutlined />
        </CustomButton>
      ),
    },
  ];

  const dataSource = contacts || [];

  const removeContact = async (id) => {
    try {
      await doRemoveContact(id).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const onContactClick = (contact, event: React.MouseEvent) => {
    if (event.target.tagName === "TD") {
      setOppen(true);
      setCurrentContact(contact);
    } else {
      removeContact(contact.id);
    }
  };

  return (
    <>
      <Layout>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={(contact) => contact.id}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                onContactClick(record, event);
              },
            };
          }}
          style={{ width: "50vw", marginInline: "auto" }}
        />
      </Layout>
      <Modal
        title={`Перевод для контакта ${currentContact?.name}`}
        open={oppen}
        onCancel={() => setOppen(false)}
      >
        <SendForm
          phone={currentContact?.phoneNumber}
          setModalOppen={setOppen}
        ></SendForm>
      </Modal>
    </>
  );
};

export default Contacts;
