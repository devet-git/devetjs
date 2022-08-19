const removeAccent = (s: string) => {
	s = s.replace(/[aàáảạãăắằặẵặâấậẩầẫ]/gi, "a")
	s = s.replace(/[đ]/gi, "d")
	s = s.replace(/[eèéẻẹẽêểếệềễ]/gi, "e")
	s = s.replace(/[iìíỉịĩ]/gi, "i")
	s = s.replace(/[oòóỏọõôổốồộỗơớờởợỡ]/gi, "o")
	s = s.replace(/[uùúủụũưừứửựữ]/g, "u")
	s = s.replace(/[yýỳỷỵỹ]/gi, "y")
	s = s.replace(/[,.?!@#$%^&*]/gi, "")
	s = s.replace(/[\s]/gi, "-")
	return s
}
export default removeAccent