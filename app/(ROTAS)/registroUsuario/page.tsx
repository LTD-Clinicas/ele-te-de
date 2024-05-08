"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export default function SignUp() {
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCpf] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [tipoUsuario, setTipoUsuario] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")

    const handleSignUp = () => {
        console.log("Cadastro: Nome Completo: " + nomeCompleto + ", Email: " + email + ", CPF: " + cpf + ", Data de Nascimento: " + dataNascimento + ", Tipo de usuário: " + tipoUsuario + ", Senha: " + senha)
    }

    return (
        <main>
            <Card className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
                <CardContent>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Registro de Usuário
                        </h2>
                    </div>

                    <form className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
                        <section>
                            <Label htmlFor="nomeCompleto" className="block text-sm font-medium leading-6 text-gray-900">
                                Nome Completo
                            </Label>

                            <Input
                                onChange={(e) => setNomeCompleto(e.target.value)}
                                id="nomeCompleto"
                                name="nomeCompleto"
                                type="text"
                                autoComplete="nome"
                                required
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </Label>

                            <Input
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="cpf" className="block text-sm font-medium leading-6 text-gray-900">
                                CPF
                            </Label>

                            <Input
                                onChange={(e) => setCpf(e.target.value)}
                                id="cpf"
                                name="cpf"
                                type="text"
                                autoComplete="cpf"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="dataNascimento" className="block text-sm font-medium leading-6 text-gray-900">
                                Data de Nascimento
                            </Label>

                            <Input
                                onChange={(e) => setDataNascimento(e.target.value)}
                                id="dataNascimento"
                                name="dataNascimento"
                                type="date"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="tipoUsuario" className="block text-sm font-medium leading-6 text-gray-900">
                                Tipo de Usuário
                            </Label>

                            <Input
                                onChange={(e) => setTipoUsuario(e.target.value)}
                                id="tipoUsuario"
                                name="tipoUsuario"
                                //type="text"
                                autoComplete="tipo"
                                required    
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="senha" className="block text-sm font-medium leading-6 text-gray-900">
                                Senha
                            </Label>

                            <Input
                                onChange={(e) => setSenha(e.target.value)}
                                id="senha"
                                name="senha"
                                type="password"
                                autoComplete="nova-senha"
                                required
                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />

                            <Label htmlFor="confirmaSenha" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirmar Senha
                            </Label>

                            <Input
                                onChange={(e) => setConfirmaSenha(e.target.value)}
                                id="confirmaSenha"
                                name="confirmaSenha"
                                type="password"
                                autoComplete="nova-senha"
                                required
                                className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                            />
                        </section>

                        <Button
                            onClick={handleSignUp}
                            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        >
                            Criar Conta
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}
