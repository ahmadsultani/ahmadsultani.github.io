interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section(props : SectionProps) {
  const { id, children } = props
  return (
    <section id={id} className=" w-screen flex flex-col gap-6 mx-auto px-7 lg:px-20 bg-gray-900">
      {children}
    </section>
  )
}
