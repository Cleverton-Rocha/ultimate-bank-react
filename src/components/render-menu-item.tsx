const RenderMenuItem = (IconComponent: React.ElementType, label: string) => {
  return (
    <div className="flex h-20 w-full items-center gap-4 bg-black p-4">
      <div className="rounded-full border border-lime-500 bg-lime-500 p-3">
        <IconComponent className="text-white" size={24} />
      </div>
      <span className="text-lg font-medium text-white">{label}</span>
    </div>
  )
}
export default RenderMenuItem
