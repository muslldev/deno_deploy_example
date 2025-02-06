import { Button, Form, Input } from "antd";
import type { FormProps } from "antd";
import { supabase } from "../../../shared/supabaseClient";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type FieldType = {
  email: string;
  password: string;
};

function LoginForm() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/");
      }
    };
    checkSession();
  }, []);

  const onFinish: FormProps<FieldType>["onFinish"] = async values => {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    console.log(error);
    if (error) {
      alert("Wrong login or password!");
    } else {
      navigate("/");
    }
  };

  return (
    <Form
      name="login"
      style={{
        minWidth: 500,
        background: "white",
        padding: "25px",
        borderRadius: "30px",
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item<FieldType>
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Enter E-mail!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Enter password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button style={{ width: "20%" }} type="primary" htmlType="submit">
            Войти
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
