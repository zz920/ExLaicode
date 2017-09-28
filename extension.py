# document for RapydScript: https://github.com/atsepkov/RapydScript
# some code examples: http://www.rapydscript.com/category/examples/


def getProgIndex():
    """ get progress index from thead"""
    table = document.getElementsByClassName("table")[0]
    head_content = table.tHead.children[0]

    for index, th in enumerate(head_content.children):
        if th.innerHTML == "Progress":
            return index
    # not exist, please check the update of laicode
    raise ValueError("'Progress' doesn't exist, please verify the code of getProgIndex.")


def getIdEntryPair():
    """ get all problem id entry paris."""
    entry_list = document.getElementsByClassName("problem-entry")
    id_entry_pair = {}

    for entry in entry_list:
        pid = entry.getAttribute("data-pid")
        id_entry_pair[pid] = entry

    return id_entry_pair


def resetProblemById(entry_pair, pid, pindex):
    """ reset the problem to unsloved."""
    prob_tr = entry_pair[pid]
    # last td
    prob_prog_td = prob_tr.children[pindex]

    prob_prog_td.className = "problem-progress progress-0"


ProgIndex = getProgIndex()
entry_dict = getIdEntryPair()

for pid in entry_dict:
    resetProblemById(entry_dict, pid, ProgIndex)
