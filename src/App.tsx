import "./App.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "./utils/validationSchema";
import { validationSchemaTypes } from "./utils/validationSchema";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // zodで定義したerrorsが格納される
  } = useForm<validationSchemaTypes>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
  });
  const onSubmit = (data: validationSchemaTypes) => {
    console.log(data);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="名前">名前</label>
        <input id="name" type="text" {...register("name")} />
        <p>{errors.name?.message}</p>
        <label htmlFor="メールアドレス">メールアドレス</label>
        <input id="email" type="email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <label htmlFor="パスワード">パスワード</label>
        <input id="password" type="password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default App;
