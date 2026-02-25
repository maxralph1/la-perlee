interface LinkButtonProps {
  htmlAction: string;
  text: string;
  additionalStyling?: any;
}

export default function SubmitButton({htmlAction, text, additionalStyling = ''}: LinkButtonProps) {
  return (
    <button type="submit" onSubmit={ htmlAction } className={`block lowercase font-bold border border-2 rounded-full px-3 md:px-4.5 py-1 md:py-1.5 ${ additionalStyling }`}>{ text }</button>
  )
}