import { GameMode, hexTypePerGameMode } from "@/app/models/GameMode";
interface InfoProps {
    mode: GameMode;
}
export default function Info({mode}: InfoProps){

    // Object.entries(hexTypePerGameMode[mode]).map(item => {
    //     <p className="py-4">item[0]+": "+item[1]</p>
    //   })

    return(
<dialog id="info_modal" className="modal">
    <div className="modal-box">
        <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">{mode}</h3>
        {
            Object.entries(hexTypePerGameMode[mode]).map(([key, value], index) => (
                <p key={index} className="p-1">{key+": "+ value}</p>
            ))
        }
    </div>
    <form method="dialog" className="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

    );
}