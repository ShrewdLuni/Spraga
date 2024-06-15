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
    <div className="flex flex-col lg:flex-row items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-center w-full h-[50%] lg:w-[50%] lg:h-auto"><p>Image</p></div>
      <div className="flex items-center justify-center w-full h-[50%] lg:w-[50%] lg:h-auto">
        <form className="flex flex-col gap-y-2 justify-center h-full" onSubmit={handleSubmit}>
          <div>
            <p>Want to be Partners?</p>
            <p>Fill the form and become one</p>
          </div>
          <Input type="text" placeholder="Name" name="name"/>
          <Input type="number" placeholder="Phone" name="phone"/>
          <Input type="email" placeholder="Email" name="email"/>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}