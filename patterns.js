const patterns = {
    1: [
        "T44{C   | x  | x  | x  }",
    ],
    2: [
        "T44{C   | C  }",
        "T44{C   | x  | C  | x  }",
    ],
    3: [
        "T44{C C |C   }",
        "T44{C   |C C }",
        "T44{C   | x  |C   | C  }",
        "T44{C   |C   | x  | C  }",
        "T44{C   |C   | C  | x  }",
    ],
    4: [
        "T44{C C |C C }",
        "T44{C   |C   |C   |C   }",
    ],
    5: [
        "T44{C C |C   |C   |C   }",
        "T44{C   |C C |C   |C   }",
        "T44{C   |C   |C C |C   }",
        "T44{C   |C   |C   |C C }",
        "T44{C C |C C |C   | x  }",
        "T44{C   | x  |C C |C C }",
    ],
    6: [
        "T44{C C |C C |C   |C   }",
        "T44{C C |C   |C C |C   }",
        "T44{C C |C   |C   |C C }",
        "T44{C   |C C |C   |C C }",
        "T44{C   |C   |C C |C C }",
        "T44{C   |C C |C C |C   }",
    ]
};

export { patterns }