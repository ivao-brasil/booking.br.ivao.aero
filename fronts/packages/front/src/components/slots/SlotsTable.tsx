import { FunctionComponent } from "react";
import { FaPlane } from "react-icons/fa";

interface SlotsTableProps {

}

export const SlotsTable: FunctionComponent<SlotsTableProps> = () => {
    return (
        <table className="table-auto border-separate text-center w-full" style={{ borderSpacing: 0 }}>
            <thead>
                <tr className="text-[12px] font-semibold leading-7 font-header">
                    <th aria-label="Logo da companhia" className="invisible w-24"></th>
                    <th>Número do voo</th>
                    <th>Aeronave</th>
                    <th>Partida</th>
                    <th className="invisible w-10"></th>
                    <th>Chegada</th>
                    <th>EOBT</th>
                    <th>Stand</th>
                    <th className="invisible w-32"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-black shadow-md text-blue dark:text-white font-semibold font-action">
                    <td className="rounded-lg bg-transparent">
                        <img className="rounded-l-lg" src="https://via.placeholder.com/96x60" alt="Logo companhia GLO" />
                    </td>
                    <td>
                        AZU5037
                    </td>
                    <td className="font-header text-[12px]">
                        A320
                    </td>
                    <td>
                        <span className="font-extrabold">SBCF</span><br />
                        TANCREDO NEVES INTL
                    </td>
                    <td aria-hidden="true">
                        <div className="flex items-center">
                            <div className="inline-block border-b-2 border-dashed w-6 h-1 -ml-10" />
                            <div className="inline-block mx-auto w-4">
                                <FaPlane className="inline-block" />
                            </div>
                            <div className="inline-block border-b-2 border-dashed w-6 h-1 -mr-10" />
                        </div>
                    </td>
                    <td>
                        <span className="font-extrabold">SBGR</span><br />
                        GUARULHOS INTL
                    </td>
                    <td>1910Z</td>
                    <td>202</td>
                    <td className="rounded-r-lg">a</td>
                </tr>
            </tbody>
        </table>
    )
}