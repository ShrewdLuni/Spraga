import { Button } from "../ui/button"
import { Input } from "../ui/input"

export const Contact = () => {
  const handleSubmit = (e : any) => {
    e.preventDefault();
		e.stopPropagation();

    const formData = new FormData(e.target);
    const inputValue = formData.get('email');
    console.log(inputValue);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-8 mt-4 w-screen h-screen">
      <div className="flex items-center justify-center w-full h-[50%] lg:w-[50%] lg:h-auto"><p>Image</p></div>
      <div className="flex items-center justify-center w-full h-[50%] lg:w-[50%] lg:h-auto">
        <form className="flex flex-col gap-y-2 justify-center h-full" onSubmit={handleSubmit}>
          <div>
            <p className="text-5xl font-bold">Want to be Partners?</p>
            <p className="text-3xl font-semibold">Fill the form and become one!</p>
          </div>
          <Input className="font-bold text-xl" type="text" placeholder="Name" name="name"/>
          <Input className="font-bold text-xl" type="email" placeholder="Email" name="email"/>
          <Input className="font-bold text-xl h-32 align-middle" type="text" placeholder="" name="info"/>
          <Button className="font-bold text-xl " type="submit">Submit!</Button>
        </form>
      </div>
    </div>
  )
}